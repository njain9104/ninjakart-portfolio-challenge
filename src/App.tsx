import React, { MouseEvent, useState } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Headers from "./components/header/Header";

enum Tabs {
  MY_CREATIONS = "MY_CREATIONS",
  MY_FAVORITES = "MY_FAVORITES",
}

const App = () => {
  const [activeTab, setActiveTab] = useState<Tabs | string>(Tabs.MY_CREATIONS);
  const [createdSites, setCreatedSites] = useState([
    {
      id: 1,
      name: "My Site One",
      link: "https://place-your-bets.netlify.app/",
      upvotes: 0,
    },
    {
      id: 2,
      name: "My Site Two",
      link: "https://place-your-bets.netlify.app/",
      upvotes: 0,
    },
    {
      id: 3,
      name: "My Site Three",
      link: "https://place-your-bets.netlify.app/",
      upvotes: 0,
    },
    {
      id: 4,
      name: "My Site Four",
      link: "https://place-your-bets.netlify.app/",
      upvotes: 0,
    },
  ]);

  const [favSites, setFavSites] = useState([
    {
      id: 1,
      name: "My Fav Site One",
      link: "https://place-your-bets.netlify.app/",
      upvotes: 0,
    },
    {
      id: 2,
      name: "My Fav Site Two",
      link: "https://place-your-bets.netlify.app/",
      upvotes: 0,
    },
    {
      id: 3,
      name: "My Fav Site Three",
      link: "https://place-your-bets.netlify.app/",
      upvotes: 0,
    },
    {
      id: 4,
      name: "My Fav Site Four",
      link: "https://place-your-bets.netlify.app/",
      upvotes: 0,
    },
  ]);

  const onActiveTabChange = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveTab(e.currentTarget.name);
  };

  const onSort = (updatedSites: []) => {
    if (activeTab === Tabs.MY_CREATIONS) setCreatedSites([...updatedSites]);
    else setFavSites([...updatedSites]);
  };

  const onUpvote = (updatedSites: []) => {
    if (activeTab === Tabs.MY_CREATIONS) setCreatedSites([...updatedSites]);
    else setFavSites([...updatedSites]);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Ajay N Jain Portfolio</h1>
        <div className="tabs">
          <Button
            name={Tabs.MY_CREATIONS}
            text="My Creations"
            onClick={onActiveTabChange}
            isDisabled={activeTab === Tabs.MY_CREATIONS}
          />
          <Button
            name={Tabs.MY_FAVORITES}
            text="My Favorites"
            onClick={onActiveTabChange}
            isDisabled={activeTab === Tabs.MY_FAVORITES}
          />
        </div>
      </header>

      {activeTab === Tabs.MY_CREATIONS && (
        <Headers
          name="My Creations"
          sites={createdSites}
          onUpvote={onUpvote}
          onSort={onSort}
        />
      )}
      {activeTab === Tabs.MY_FAVORITES && (
        <Headers
          name="My Favorites"
          sites={favSites}
          onUpvote={onUpvote}
          onSort={onSort}
        />
      )}
    </div>
  );
};

export default App;
