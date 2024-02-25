
import { Panel } from 'primereact/panel';

const Content = ({ name = '', data = '' }) => {
  return (
    <Panel header={name} style={{ color: '#662C91', marginBottom: 15 }}>
      <p className="m-0">{data}</p>
    </Panel>
  );
}

export default Content;
