import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
 import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white">
     
      <ItemsContainer />
      <div
  className="flex flex-col sm:flex-row items-center justify-center text-center text-gray-400 text-sm pb-8"
>
  <span>Copyright © All rights reserved 2024 - by AIM4U Software Solutions, Mumbai Maharashtra.</span>
  
  {/* <SocialIcons Icons={Icons} /> */}
</div>

    </footer>
  );
};

export default Footer;