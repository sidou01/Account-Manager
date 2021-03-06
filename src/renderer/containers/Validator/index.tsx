import React, {FC, ReactNode} from 'react';
import noop from 'lodash/noop';

import Button from '@renderer/components/FormElements/Button';
import DetailPanel from '@renderer/components/DetailPanel';
import PageHeader from '@renderer/components/PageHeader';
import PageLayout from '@renderer/components/PageLayout';
import PageTabs from '@renderer/components/PageTabs';

import './Validator.scss';

const Validator: FC = () => {
  const renderDetailPanels = (): ReactNode => {
    return (
      <div className="Validator__panels">
        <DetailPanel
          className="Validator__DetailPanel"
          items={[
            {
              key: 'Node Type',
              value: 'Validator',
            },
            {
              key: 'Network ID',
              value: 'Gn53dfs4a2z',
            },
            {
              key: 'Protocol',
              value: 'http',
            },
          ]}
          title="Validator Information"
        />
        <DetailPanel
          className="Validator__DetailPanel"
          items={[
            {
              key: '90',
              value: '1.00',
            },
            {
              key: '70',
              value: '1.22',
            },
          ]}
          tableHeaders={['Bank Trust Level', 'Tx Fee (Points)']}
          title="Trust Levels"
        />
      </div>
    );
  };

  const renderRightPageHeaderButtons = (): ReactNode => (
    <>
      <Button variant="outlined">Add to Managed Validators</Button>
      <Button>Register Bank</Button>
    </>
  );

  const renderTop = (): ReactNode => {
    return (
      <>
        <PageHeader
          rightContent={renderRightPageHeaderButtons()}
          title="My Validator (223.125.111.178)"
          trustScore={98.34}
        />
        <PageTabs
          items={[
            {
              active: true,
              name: 'Overview',
              onClick: noop,
            },
            {
              active: false,
              name: 'Members',
              onClick: noop,
            },
            {
              active: false,
              name: 'Transactions',
              onClick: noop,
            },
            {
              active: false,
              name: 'Banks',
              onClick: noop,
            },
            {
              active: false,
              name: 'Validators',
              onClick: noop,
            },
          ]}
        />
      </>
    );
  };

  return (
    <div className="Validator">
      <PageLayout content={renderDetailPanels()} top={renderTop()} />
    </div>
  );
};

export default Validator;
