import React from "react";

const Newsdropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div
        className={"dropdown w-100" + (dropdownPopoverShow ? " show " : " ")}
      >
        <button
          className="btn btn-dark dropdown-toggle w-100"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          หมวดหมู่
        </button>
        <div
          aria-labelledby="dropdownMenuButton"
          className={"dropdown-menu w-100" + (dropdownPopoverShow ? " show " : " ")}
        >
          <a className="dropdown-item" href="#">
            ประกาศ
          </a>
          <a className="dropdown-item" href="#">
            ข่าวสารใหม่
          </a>
          <a className="dropdown-item" href="#">
            ประกาศ
          </a>
        </div>
      </div>
    </>
  );
};

export default Newsdropdown;

// import React, { Component } from "react";
// const Newsdropdown = () => {
//   class Card extends Component {
//     constructor() {
//       super();
//       this.state = {
//         showMenu: false,
//       };
//       this.showMenu = this.showMenu.bind(this);
//     }
//     showMenu(event) {
//       event.preventDefault();

//       this.setState({
//         showMenu: true,
//       });
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.showMenu}>Show menu</button>

//           {this.state.showMenu ? (
//             <div className="menu">
//               <button> Menu item 1 </button>
//               <button> Menu item 2 </button>
//               <button> Menu item 3 </button>
//             </div>
//           ) : null}
//         </div>
//       );
//     }
//   }
// };

// export default Newsdropdown;
