import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function All() {
  const [allGames, setAllGames] = useState([]);
  const [visible, setVisible] = useState(20);
  function getAllGame() {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "9682ed2c68msh19d7eceae802daep14631ejsnd25102d05675",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios.request(options).then(function (response) {
      setAllGames(response.data);
      console.log(response.data);
    });
  }

  function loadMore() {
    setVisible(visible + 20);
  }
  useEffect(() => {
    getAllGame();
  }, []);

  return (
    <>
      <div className="container py-5 my-5">
        <div className="row g-3">
          {allGames.length > 0 ? (
            allGames.slice(0, visible).map((game, index) => (
              <div key={index} className="col-md-4 shadow card-box mb-3">
                <Link
                  to={"/gamedetails/" + game.id}
                  className="text-decoration-none details"
                >
                  <div className="card w-100 h-100">
                    <img
                      src={game.thumbnail}
                      className="card-img-top"
                      alt="game"
                    />
                    <div className="card-body d-flex justify-content-between align-items-start">
                      <div>
                        {console.log(
                          "ddd " + game.title.split(" ").slice(0, 3)
                        )}
                        {console.log(
                          "gggg " +
                            game.short_description.split("  ").slice(0, 3)
                        )}

                        <h5 className="card-title">
                          {game.title.slice(0, 20)}
                        </h5>
                        <p className="card-text text-muted small">
                          {game.short_description.slice(0, 20)} ...
                        </p>
                      </div>
                      <div className="btn card-btn btn-sm">Free</div>
                    </div>

                    <div className="card-body pt-0 d-flex justify-content-between align-items-center ">
                      <i className="fas fa-plus-square"></i>
                      <div>
                        <span className="me-2 genre text-dark badge badge-secondary">
                          {game.genre}
                        </span>
                        {game.platform === "Windows" ? (
                          <i className="fab fa-windows text-muted stretched-link"></i>
                        ) : (
                          <i className="fas fa-window-maximize text-muted stretched-link"></i>
                        )}
                      </div>
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
          <div className="text-center">
            {visible < allGames.length && (
              <button
                onClick={loadMore}
                className="btn btn-outline-secondary btn-md ml-0"
              >
                More Games
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
