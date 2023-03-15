import React, { useEffect, useState } from 'react';

import 'pages/user_dashboard/index.scss';

import app, { LoginState } from 'state';
import { notifyInfo } from 'controllers/app/notifications';
import { DashboardActivityNotification } from 'models';
import Sublayout from 'views/sublayout';
import { CWTab, CWTabBar } from '../../components/component_kit/cw_tabs';
import { DashboardCommunitiesPreview } from './dashboard_communities_preview';
import { fetchActivity } from './helpers';
import { useCommonNavigate } from 'navigation/helpers';
import { Feed } from '../../components/feed';

export enum DashboardViews {
  ForYou = 'For You',
  Global = 'Global',
  Chain = 'Chain',
}

type UserDashboardProps = {
  type?: string;
};

const UserDashboard = (props: UserDashboardProps) => {
  const { type } = props;

  const [activePage, setActivePage] = useState<DashboardViews>(
    DashboardViews.Global
  );

  const navigate = useCommonNavigate();

  const loggedIn = app.loginState === LoginState.LoggedIn;

  useEffect(() => {
    if (!type) {
      navigate(`/dashboard/${loggedIn ? 'for-you' : 'global'}`);
    } else if (type === 'for-you' && !loggedIn) {
      navigate('/dashboard/global');
    }
  }, []);

  useEffect(() => {
    const subpage: DashboardViews =
      type === 'chain-events'
        ? DashboardViews.Chain
        : type === 'global'
        ? DashboardViews.Global
        : loggedIn
        ? DashboardViews.ForYou
        : DashboardViews.Global;

    if (!activePage || activePage !== subpage) {
      setActivePage(subpage);
    }
  }, [activePage]);

  return (
    <Sublayout>
      <div className="UserDashboard">
        <div className="dashboard-column">
          <div className="dashboard-header">
            <CWTabBar>
              <CWTab
                label={DashboardViews.ForYou}
                isSelected={activePage === DashboardViews.ForYou}
                onClick={() => {
                  if (!loggedIn) {
                    notifyInfo(
                      'Log in or create an account for custom activity feed'
                    );
                    return;
                  }
                  navigate('/dashboard/for-you');
                }}
              />
              <CWTab
                label={DashboardViews.Global}
                isSelected={activePage === DashboardViews.Global}
                onClick={() => {
                  navigate('/dashboard/global');
                }}
              />
              <CWTab
                label={DashboardViews.Chain}
                isSelected={activePage === DashboardViews.Chain}
                onClick={() => {
                  navigate('/dashboard/chain-events');
                }}
              />
            </CWTabBar>
          </div>
          <>
            {/* TODO: add filter functionality */}
            {/* <CWPopover
              trigger={
                <CWButton
                  buttonType="mini-white"
                  label="Filter"
                  iconRight="chevronDown"
                />
              }
              content={
                <CWCard className="dashboard-filter-items">
                  <CWCheckbox
                    checked={false}
                    value=""
                    label="Threads"
                    onchange={() => {
                      // TODO: add filter functionality
                    }}
                  />
                  <CWCheckbox
                    checked={false}
                    value=""
                    label="Polls"
                    onchange={() => {
                      // TODO: add filter functionality
                    }}
                  />
                  <CWCheckbox
                    checked={false}
                    value=""
                    label="Proposals"
                    onchange={() => {
                      // TODO: add filter functionality
                    }}
                  />
                  <CWCheckbox
                    checked={false}
                    value=""
                    label="Crowdfunds"
                    onchange={() => {
                      // TODO: add filter functionality
                    }}
                  />
                </CWCard>
              }
            />
            <CWDivider /> */}
            {activePage === DashboardViews.ForYou && (
              <Feed
                fetchData={() => fetchActivity(activePage)}
                noFeedMessage="Join some communities to see Activity!"
                onFetchedDataCallback={DashboardActivityNotification.fromJSON}
              />
            )}
            {activePage === DashboardViews.Global && (
              <Feed
                fetchData={() => fetchActivity(activePage)}
                noFeedMessage="No Activity"
                onFetchedDataCallback={DashboardActivityNotification.fromJSON}
              />
            )}
            {activePage === DashboardViews.Chain && (
              <Feed
                fetchData={() => fetchActivity(activePage)}
                noFeedMessage="Join some communities that have governance to see Chain Events!"
                onFetchedDataCallback={DashboardActivityNotification.fromJSON}
              />
            )}
          </>
        </div>
        <DashboardCommunitiesPreview />
      </div>
    </Sublayout>
  );
};

export default UserDashboard;
