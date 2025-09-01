import "./styles.scss"; // Assuming you move the styles to this file
import React, { useState } from "react";
import { /* FilePond,*/ registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Modal, Button, Dropdown } from "react-bootstrap";
import Icon from "../../Icons";
import ImageUpload from "../../components/Teams/ImageUpload";
import CustomDropdown from "../../components/Teams/DropDown";

// Register the plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const TeamManagement = () => {
  // const [files, setFiles] = useState([]);
  const [roles, setRoles] = useState([
    "Campaign Manager",
    "Voucher Processing",
    "Admin",
    "Accounting",
  ]);
  const [selectedDropdownItem, setselectedDropdownItem] = useState(roles[0]);
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Admin",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Admin",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
    {
      name: "Emily Russo",
      email: "emily@fujiyamasushi.com",
      role: "Manager",
      imageSrc: "/images/user-management/emily-russo.png",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const functionalities = [
    {
      name: "Business Profile",
      description: "Business details & contact",
      icon: "/images/teams/roles/Business-profile.svg",
    },
    {
      name: "Campaigns",
      description: "Campaigns creation & monitoring",
      icon: "/images/teams/roles/Campaigns.svg",
    },
    {
      name: "Voucher",
      description: "Voucher processing",
      icon: "/images/teams/roles/Voucher.svg",
    },
    {
      name: "Team Management",
      description: "Add or remove users",
      icon: "/images/teams/roles/Team-management.svg",
    },
    {
      name: "Plans",
      description: "Activate or upgrade plan",
      icon: "/images/teams/roles/Plans.svg",
    },
  ];

  const removeMember = (index) => {
    setTeamMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
  };
  /*
  const handleFilePondInit = () => {
    console.log("FilePond has initialized");
  };*/
  const font = {
    family: {
      fontFamily: '"Greycliff CF", sans-serif',
    },
    color: {
      color: "#434343",
    },
    weight_500: {
      fontWeight: "500",
    },
  };
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleShowRoleModal = () => setShowRoleModal(true);
  const handleCloseRoleModal = () => setShowRoleModal(false);

  const [uploadedImage, setUploadedImage] = useState("");
  const addRole = (event) => {
    event.preventDefault();
    const roleName = document.getElementById("role-name").value;
    if (roleName.trim()) {
      const truncatedRoleName =
        roleName.length > 18 ? roleName.substring(0, 18) + ".." : roleName;
      setRoles([...roles, truncatedRoleName]);
      document.getElementById("role-name").value = "";
    }
  };
  const handleRoleChange = (role, index) => {
    /* setselectedDropdownItem(role);*/
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index].role = role;
    setTeamMembers(updatedTeamMembers);
  };

  const handleDropdownRoleChange = (role) => {
    setselectedDropdownItem(role);
  };
  const [selectedPrivileges, setSelectedPrivileges] = useState(
    // Initialize with default values for each functionality item
    functionalities.map(() => "Can edit")
  );

  const handlePrivilegeChange = (index, privilege) => {
    setSelectedPrivileges((prevPrivileges) => {
      // Create a new array with updated privilege for the specific index
      const updatedPrivileges = [...prevPrivileges];
      updatedPrivileges[index] = privilege;
      return updatedPrivileges;
    });
  };
  const addUser = (event) => {
    event.preventDefault();
    const userFirstName = document.getElementById("first-name").value;
    const userLastName = document.getElementById("last-name").value;
    const userName = userFirstName + " " + userLastName;
    const userEmail = document.getElementById("email").value;
    const userRole = selectedDropdownItem;
    console.log(userRole);
    if (!userFirstName || !userLastName || !userEmail || !userRole) {
      return; // Exit the function early if any field is empty
    } else {
      const user = {
        name: userName,
        email: userEmail,
        role: userRole,
        imageSrc: uploadedImage,
        roles: roles,
      };

      if (user) {
        setTeamMembers([...teamMembers, user]);
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("email").value = "";
      }
    }
  };

  return (
    <div>
      <div className="ts-wrapper-head ts-wrapper-head--light text-end pb-4">
        <div className="ts-wrapper-head__main d-flex justify-content-end">
          <div>
            <Button
              className="ts-btn ts-btn__secondary ts-btn__primary--add-user fw-semibold rounded d-none d-md-inline"
              onClick={handleShowRoleModal}
            >
              Create New Role
            </Button>
            <Button
              className="ts-btn ts-btn__primary ts-btn__primary--add-user fw-semibold rounded d-none d-md-inline ms-2"
              onClick={handleShow}
            >
              Add New User
            </Button>

            <div className="d-md-none">
              <div className="dropdown">
                <button
                  className="btn p-0 dropdown-toggle border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Icon name="plus-circle" />
                </button>
                <ul className="dropdown-menu fw-semibold">
                  <li>
                    <div
                      className="dropdown-item pointer-cursor"
                      onClick={handleShowRoleModal}
                    >
                      <img
                        src="/images/teams/mobile-buttons/new_role.svg"
                        alt=""
                        width={20}
                      />
                      <span className="ts-ms-12"> Create New Role </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item pointer-cursor"
                      onClick={handleShow}
                    >
                      <img
                        src="/images/teams/mobile-buttons/user.svg"
                        alt=""
                        width={20}
                      />
                      <span className="ts-ms-12"> Add New User </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal centered show={showRoleModal} onHide={handleCloseRoleModal}>
        <Modal.Header className="d-flex align-items-center justify-content-between">
          <h1
            style={font.color}
            className="modal-title fs-5 flex-grow-1 text-center"
          >
            Add New Role
          </h1>
          <img
            src="/images/close-modal.svg"
            width={15}
            onClick={handleCloseRoleModal}
            alt="close modal"
            role="button"
          />
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mt-4 mb-4">
              <input
                type="text"
                className="add-user-modal-input"
                placeholder="Enter role name"
                minLength="2"
                id="role-name"
                required
              />
            </div>
            {functionalities.map((functionality, index) => (
              <div
                className="d-flex align-items-center gap-2 funct "
                key={index}
              >
                <img
                  src={functionality.icon}
                  alt="business-profile"
                  width={33}
                />
                <div>
                  <div className="funct-name">{functionality.name}</div>
                  <div className="funct-desc">{functionality.description}</div>
                </div>
                <div className="margin-left-auto-custom width-100px">
                  <CustomDropdown
                    specificstyles={"height-reduced"}
                    selectedDropdownItem={selectedPrivileges[index]} // Use index to track selected privilege
                    roles={["Can edit", "Can view", "Hidden"]} // Assuming these are your privilege options
                    handleDropdownRoleChange={(privilege) =>
                      handlePrivilegeChange(index, privilege)
                    } // Pass index and privilege to handlePrivilegeChange
                  />
                </div>
              </div>
            ))}
            <button
              className="ts-btn ts-btn__primary text-center rounded-2 w-100 mt-3"
              onClick={addRole}
            >
              Confirm
            </button>
          </form>
        </Modal.Body>
      </Modal>
      <Modal centered show={showModal} onHide={handleClose} style={font.family}>
        <Modal.Header className="d-flex align-items-center justify-content-between">
          <h1
            style={font.color}
            className="modal-title fs-5 flex-grow-1 text-center"
          >
            Add New User
          </h1>
          <img
            src="/images/close-modal.svg"
            width={15}
            onClick={handleClose}
            alt="close modal"
            role="button"
          />
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center mb-06">
            <ImageUpload
              initialSrc="/images/teams/profile.svg"
              width="120px"
              preload
              onImageChange={(imageUrl) => setUploadedImage(imageUrl)}
            />
          </div>

          <form autocomplete="off">
            <div className="d-flex justify-content-between gap-2">
              <div className="mb-2 add-user-modal-input-container">
                <input
                  autocomplete="off"
                  type="text"
                  className="add-user-modal-input"
                  placeholder="First Name"
                  id="first-name"
                  minLength="2"
                  required
                />
              </div>
              <div className="mb-2 add-user-modal-input-container">
                <input
                  autocomplete="off"
                  type="text"
                  className="add-user-modal-input"
                  placeholder="Last Name"
                  id="last-name"
                  minLength="2"
                  required
                />
              </div>
            </div>

            <div className="mb-2">
              <input
                autocomplete="off"
                type="email"
                id="email"
                className="add-user-modal-input"
                placeholder="Email"
                minLength="2"
                required
              />
            </div>
            <label
              style={{ color: "#434343", fontWeight: "500" }}
              htmlFor="role-select"
              className="ms-1 mt-1"
            >
              Role
            </label>
            <CustomDropdown
              specificstyles={"add-user-modal-input"}
              selectedDropdownItem={selectedDropdownItem}
              roles={roles}
              handleDropdownRoleChange={handleDropdownRoleChange}
            />

            <button
              className="ts-btn ts-btn__primary text-center rounded-2 w-100 mt-4"
              onClick={addUser}
            >
              Confirm
            </button>
          </form>
        </Modal.Body>
      </Modal>

      <div className="ts-wrapper-body">
        <div className="ts-team-table">
          <div className="ts-team-row ts-team-row__head align-items-center">
            <div>
              <p className="fw-bold mb-0">Name</p>
            </div>
            <div className="d-none d-md-block">
              <p className="fw-bold mb-0">Email</p>
            </div>
            <div>
              <p className="fw-bold text-center text-md-start mb-0 ">Role</p>
            </div>
            <div>
              <p className="fw-bold text-end text-md-center mb-0">Actions</p>
            </div>
          </div>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="ts-team-row ts-team-row__body align-items-center"
            >
              <div className="d-flex align-items-center gap-2">
                <img
                  className="d-none d-md-block rounded-circle"
                  width="44"
                  height="44"
                  src={member.imageSrc}
                  alt="..."
                />
                <p className="mb-0">{member.name}</p>
              </div>
              <div className="d-none d-md-block">
                <p className="mb-0">{member.email}</p>
              </div>
              <div>
                <p className="mb-0 text-center text-md-start">{member.role}</p>
              </div>
              <div>
                <div className="d-flex justify-content-end justify-content-md-center gap-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="ts-btn-change-role d-flex justify-content-center align-items-center p-0"
                      id="dropdown-basic"
                    >
                      <img
                        width="14"
                        src="/images/check-list-svgrepo-com.png"
                        alt="..."
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {roles.map((role, roleIndex) => (
                        <Dropdown.Item
                          key={roleIndex}
                          href="#"
                          onClick={() => handleRoleChange(role, index)}
                        >
                          {role}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <button
                    className="ts-btn-close ts-btn-close--team d-flex justify-content-center align-items-center"
                    onClick={() => removeMember(index)}
                  >
                    <img width="11" src="/images/X-white.png" alt="..." />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
