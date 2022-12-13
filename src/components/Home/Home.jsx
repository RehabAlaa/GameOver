import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [allGames, setAllGames] = useState([]);

  async function getAllGame() {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
      params: { tag: "3d.mmorpg.fantasy.pvp", platform: "pc" },
      headers: {
        "X-RapidAPI-Key": "9682ed2c68msh19d7eceae802daep14631ejsnd25102d05675",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setAllGames(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    getAllGame();
  }, []);
  return (
    <>
      <div className="title my-5 py-5 text-center w-100">
        <h1 className="">
          Find & track the best
          <span className="blue"> free-to-play</span> games!
        </h1>
        <p className="text-muted">
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </p>
        <Link to="/all" className="btn btn-outline-secondary btn-md ml-0">
          Browse Games
        </Link>
      </div>

      <div className="container mb-5">
        <div className="personalize d-flex align-items-center pb-5">
          <i className="fas fa-robot me-2 fa-2x"></i>
          <h3>Personalized Recommendations</h3>
        </div>
        <div className="row g-3">
          {allGames.length > 0 ? (
            allGames.splice(0, 3).map((game, index) => (
              <div key={index} className="col-md-4 shadow card-box mb-3">
                <Link
                  to={"/gamedetails/" + game.id}
                  className="text-decoration-none details"
                >
                  <div className="card w-100 h-100">
                    <img
                      src={game.thumbnail}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{game.title}</h5>
                      <div className="btn card-btn btn-sm">Free</div>
                      {/* <Link to="/all" className="btn card-btn btn-sm">
                      Free
                    </Link> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div id="cssLoader17" className="main-wrap main-wrap--white">
              <div className="cssLoader17"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
