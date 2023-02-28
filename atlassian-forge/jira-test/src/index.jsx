import ForgeUI, { render, Fragment, IssuePanel, useState, useEffect, Text, Table, Row, Head, Cell } from '@forge/ui';
import api, { route } from "@forge/api";
// https://atlassian.design/components/spinner/examples
// import Spinner from '@atlaskit/spinner';
// Loader throws error <Spinner interactionName="load" />

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProjects() {
    const response = await api.asApp().requestJira(route`/rest/api/3/project/search`);
    const data = await response.json();
    console.log("OUTPUT:", data)
    setProjects(data.values);
    setIsLoading(false);
  }

  useEffect(async () => {
    await fetchProjects();
  }, []);

  return (
    <Fragment>
      {
        isLoading ? <Text>Loading...</Text> :
        projects.length > 0 ?
        <Table>
          <Head>
            <Cell>
              <Text>Key</Text>
            </Cell>
            <Cell>
              <Text>Name</Text>
            </Cell>
          </Head>
          {
            projects.map(project => {
              return <Row>
                  <Cell>
                    <Text>{project.key}</Text>
                  </Cell>
                  <Cell>
                    <Text>{project.name}</Text>
                  </Cell>
                </Row>
              })}
        </Table> :
        <Text>No Projects Found</Text>
      }
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
