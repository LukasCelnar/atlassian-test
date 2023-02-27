import ForgeUI, { render, Fragment, IssuePanel, useState, useEffect, Text } from '@forge/ui';
import api from "@forge/api";

const App = () => {
  const [projects, setProjects] = useState([]);

  async function fetchProjects() {
    const response = await api.asApp().requestJira("/rest/api/3/project/search");
    const data = await response.json();
    console.log("OUTPUT:", data)
    setProjects(data);
  }

useEffect(() => {
  fetchProjects();
}, []);

return (
  <Fragment>
    {projects.length > 0 ? <Text>Hello World</Text> : <Text>Error! {JSON.stringify(projects)}</Text>}
  </Fragment>
);
};

export const run = render(
<IssuePanel>
<App />
</IssuePanel>
);