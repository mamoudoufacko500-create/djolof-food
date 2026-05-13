import { TbClipboardListFilled } from "react-icons/tb";
import { RiHome4Fill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { IoGrid, IoSend, IoSettingsOutline } from "react-icons/io5";  
import type { IconsItems, ListProductType } from "./type";
import { FaBell, FaHamburger, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const Icons :IconsItems []=[
    {id:1, icon:RiHome4Fill,path:"/dashboard"},
    {id:2, icon:IoGrid,path:"/dashboard/menager"},
     {id:3, icon:TbClipboardListFilled ,path:"/dashboard/pending"},
    {id:4, icon:FaHamburger ,path:"/dashboard/produits"},
     {id:5, icon:FaBell ,path:"/dashboard/notification"},
    {id:6, icon:FaUser,path:"/dashboard/customers"},
     {id:7, icon:IoSend,path:"/dashboard/message"},
    {id:8, icon:IoMdSettings ,path:"/dashboard/settings"},
  
]

export const ListProduct: ListProductType [] = [
    {id:1,desc:"viande,frites,fromage,sauce,salade",note:9,image:"télécharger.jpg",name:"Burger", prix:1000},
    {id:2,desc:"viande,frites,fromage,sauce",note:8,image:"télécharger 1.jpg",name:"Tacos", prix:1500},
    {id:3,desc:"tomate,fromage,viande",note:10,image:"télécharger2.jpg",name:"Pizza", prix:2000},
    {id:4,desc:"poulet,frite,sauce",note:10,image:"Grillchicken.jpg",name:"Poulet frite", prix:3000},
]