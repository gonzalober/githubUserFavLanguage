import PageHeader from "../components/PageHeader";
import UsernameInput from "../components/UsernameInput";
import TopLanguage from "../components/TopLanguage";
import { useState } from "react";

const HomeScreen = () => {
  const [gitHubUserData, setGitHubUserData] = useState();
  const [userName, setUserName] = useState();

  const handleDataAvailable = (data, username) => {
    setGitHubUserData(data);
    setUserName(username);
  };

  const handleStartFetch = () => {
    setGitHubUserData(null);
  };

  return (
    <div>
      <PageHeader />
      <UsernameInput
        onDataAvailable={handleDataAvailable}
        onStartFetch={handleStartFetch}
      />
      <TopLanguage data={gitHubUserData} user={userName} />
    </div>
  );
};

export default HomeScreen;
