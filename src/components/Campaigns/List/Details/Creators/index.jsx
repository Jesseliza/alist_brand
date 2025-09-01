import { useState, useEffect } from "react";
import "./styles.scss";
import Modal from "../../../../Global/custom-modal/custom-modal";

export default function CreatorsView() {
  const initialCreators = [
    {
      id: 1,
      name: "Jessica Lewis 1",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 2,
      name: "Jessica Lewis 2",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 3,
      name: "Jessica Lewis 3",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 4,
      name: "Jessica Lewis 4",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 5,
      name: "Jessica Lewis 5",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 6,
      name: "Jessica Lewis 6",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 7,
      name: "Jessica Lewis 7",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 8,
      name: "Jessica Lewis 8",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 9,
      name: "Jessica Lewis 9",
      status: "pending",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 10,
      name: "Jessica Lewis 10",
      status: "approved",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
    {
      id: 11,
      name: "Jessica Lewis 11",
      status: "removed",
      socialLinks: {
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        youtube: "https://www.youtube.com/",
      },
      socialStats: {
        posts: 240,
        followers: "835K",
        reach: "385K",
      },
    },
  ];
  const maxCreators = 3;
  const [creators, setCreators] = useState(initialCreators);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const updateStatus = (id, newStatus) => {
    const updatedCreators = creators.map((creator) =>
      creator.id === id ? { ...creator, status: newStatus } : creator
    );
    setCreators(updatedCreators);
  };
  const updateModalStatus = (id, newStatus) => {
    const updatedCreators = creators.map((creator) =>
      creator.id === id ? { ...creator, status: newStatus } : creator
    );
    setCreators(updatedCreators);
    const updatedCreator = updatedCreators.find((creator) => creator.id === id);
    setSelectedCreator(updatedCreator);
  };
  const approvedCount = creators.filter(
    (creator) => creator.status === "approved"
  ).length;
  const handleCardClick = (creator) => {
    setSelectedCreator(creator);
  };

  const closeModal = () => {
    setSelectedCreator(null);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedCreator && isMobile) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedCreator, isMobile]);
  return (
    <>
      <div className="creators-approved">
        A minimum of {maxCreators} creators must be approved |
        <span className="creators-approved-count">&nbsp;{approvedCount}</span>{" "}
        out of
        <span className="creators-approved-count">&nbsp;3</span>
      </div>
      <section className="creators-container">
        <div className="creators-cards-container">
          {creators
            .filter((creator) => creator.status !== "removed")
            .map((creator, index) => (
              <div
                className={`creators-card ${
                  creator.status === "approved" ? "creator-card-approved" : ""
                }`}
                key={index}
              >
                <div
                  className={`creators-card-bg ${
                    creator.status === "approved"
                      ? "creators-card-bg-approved"
                      : "creators-card-bg-pending"
                  }`}
                ></div>
                <div className="creators-top">
                  <img
                    className="creators-img"
                    src={`/images/creators/Creator${1}.png`}
                    alt={`Creator ${creator.name}`}
                    onClick={isMobile ? () => handleCardClick(creator) : null}
                  />
                </div>
                <div className="creators-body">
                  <div className="creator-name">{creator.name}</div>
                  <div className="creator-socials">
                    <a
                      href={creator.socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="creator-social"
                        src="/images/creators/socials/instagram.svg"
                        alt="Instagram"
                      />
                    </a>
                    <a
                      href={creator.socialLinks.tiktok}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="creator-social"
                        src="/images/creators/socials/tiktok.svg"
                        alt="TikTok"
                      />
                    </a>
                    <a
                      href={creator.socialLinks.youtube}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="creator-social"
                        src="/images/creators/socials/youtube.svg"
                        alt="YouTube"
                      />
                    </a>
                  </div>
                  <div className="creator-social-stats">
                    <div>
                      <div className="creator-social-stats-num">
                        {creator.socialStats.posts}
                      </div>
                      <div className="creator-social-stats-info">
                        Posts <span className="creators-mb-only">|</span>
                      </div>
                    </div>
                    <div>
                      <div className="creator-social-stats-num">
                        {creator.socialStats.followers}
                      </div>
                      <div className="creator-social-stats-info">
                        Followers <span className="creators-mb-only">|</span>
                      </div>
                    </div>
                    <div>
                      <div className="creator-social-stats-num">
                        {creator.socialStats.reach}
                      </div>
                      <div className="creator-social-stats-info">Reach</div>
                    </div>
                  </div>
                  {creator.status === "approved" ? (
                    <div className="creator-approved">
                      <img
                        src="/images/creators/approved.svg"
                        alt=""
                        className="creator-approved-icon"
                      />{" "}
                      Approved
                    </div>
                  ) : (
                    <div className="creator-buttons">
                      <button
                        className="creator-buttons-approve"
                        onClick={() => updateStatus(creator.id, "approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="creator-buttons-remove"
                        onClick={() => updateStatus(creator.id, "removed")}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
        {isMobile && selectedCreator && (
          <Modal show={true} onClose={closeModal}>
            <div className="creators-card-modal">
              <div
                className={`creators-card-bg-modal ${
                  selectedCreator.status === "approved"
                    ? "creators-card-bg-approved"
                    : "creators-card-bg-pending"
                }`}
              ></div>
              <div className="creators-top-modal">
                <img
                  className="creators-img-modal"
                  src={`/images/creators/Creator${1}.png`}
                  alt={`Creator ${selectedCreator.name}`}
                />
              </div>
              <div className="creators-body-modal">
                <div className="creator-name">{selectedCreator.name}</div>
                <div className="creator-socials-modal">
                  <a
                    href={selectedCreator.socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="creator-social"
                      src="/images/creators/socials/instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href={selectedCreator.socialLinks.tiktok}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="creator-social"
                      src="/images/creators/socials/tiktok.svg"
                      alt="TikTok"
                    />
                  </a>
                  <a
                    href={selectedCreator.socialLinks.youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="creator-social"
                      src="/images/creators/socials/youtube.svg"
                      alt="YouTube"
                    />
                  </a>
                </div>
                <div className="creator-social-stats-modal">
                  <div>
                    <div className="creator-social-stats-num-modal">
                      {selectedCreator.socialStats.posts}
                    </div>
                    <div className="creator-social-stats-info-modal">Posts</div>
                  </div>
                  <div>
                    <div className="creator-social-stats-num-modal">
                      {selectedCreator.socialStats.followers}
                    </div>
                    <div className="creator-social-stats-info-modal">
                      Followers
                    </div>
                  </div>
                  <div>
                    <div className="creator-social-stats-num-modal">
                      {selectedCreator.socialStats.reach}
                    </div>
                    <div className="creator-social-stats-info-modal">Reach</div>
                  </div>
                </div>
                {selectedCreator.status === "approved" ? (
                  <div className="creator-approved-modal">
                    <img
                      src="/images/creators/approved.svg"
                      alt=""
                      className="creator-approved-icon-modal"
                    />{" "}
                    Approved
                  </div>
                ) : (
                  <div className="creator-buttons-modal">
                    <button
                      className="creator-buttons-approve"
                      onClick={() =>
                        updateModalStatus(selectedCreator.id, "approved")
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="creator-buttons-remove"
                      onClick={() => {
                        updateModalStatus(selectedCreator.id, "removed");
                        closeModal();
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
}
