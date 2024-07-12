import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GoCircle } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

export default function Home() {
  return (
    <main className=" p-[60px]">
     <div className="w-full-screen border grid grid-cols-12 h-[600px]">
       <div className="col-span-5 bg-[#2B2B38] p-[20px] text-white">
         <div className="flex justify-between mb-5">
         <IoIosArrowForward className="transform rotate-180" size="35" />
         <IoIosAddCircleOutline size="35" />
         
         </div>
         <h1 className="text-center text-9xl mb-5 ">15</h1>
         <h1 className="text-center text-4xl uppercase mb-7">Sunday</h1>
         <div className="pl-8 pt-4">
           <div className="pb-3">
             <div className="flex">
             <IoMdCheckmarkCircle color="green" size="25" />
               <h3 className="text-lg pl-3 font-normal">Buy birthday gift</h3>
             </div>
             <div>
               <h3 className="text-sm font-normal pl-[38px]">11:30</h3>
             </div>
           </div>
           <div className="pb-3">
             <div className="flex">
             <GoCircle  size="25" />
               <h3 className="text-lg pl-3 font-normal">Buy birthday gift</h3>
             </div>
             <div>
               <h3 className="text-sm font-normal pl-[38px]">11:30</h3>
             </div>
           </div>
           <div>
             <div className="flex">
             <GoCircle  size="25" />
               <h3 className="text-lg pl-3 font-normal">Buy birthday gift</h3>
             </div>
             <div>
               <h3 className="text-sm font-normal pl-[38px]">11:30</h3>
             </div>
           </div>
         </div>

       </div>
       <div className="col-span-7 p-[20px]">
         <div className="flex items-center justify-end pt-5 pb-5">
         <LuCalendarDays size="50" />
         <h1 className="text-7xl pl-3">2024</h1>
         </div>
         <div className="flex items-center justify-center pt-5 pb-5">
         <IoMdArrowDropleft size="35"/>
           <h2 className="pl-2 pr-2 text-3xl uppercase">March</h2>
           <IoMdArrowDropright size="35" />
         </div>
         <div className=" flex flex-row gap-8 justify-center mt-5">
          <div className="flex flex-col gap-4 items-center ">
            <h2 className="text-3xl font-bold">SUN</h2>
            <h3 className="text-2xl opacity-50 justify-center">1</h3>
            <h3 className="text-2xl opacity-50">8</h3>
            <h3 className="text-2xl ">15</h3>
            <h3 className="text-2xl ">22</h3>
            <h3 className="text-2xl ">29</h3>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <h2 className="text-3xl font-bold">MON</h2>
            <h3 className="text-2xl opacity-50 justify-center">2</h3>
            <h3 className="text-2xl opacity-50">9</h3>
            <h3 className="text-2xl ">16</h3>
            <h3 className="text-2xl ">23</h3>
            <h3 className="text-2xl ">30</h3>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl font-bold">TUE</h2>
            <h3 className="text-2xl opacity-50 justify-center">3</h3>
            <h3 className="text-2xl opacity-50">10</h3>
            <h3 className="text-2xl ">17</h3>
            <h3 className="text-2xl ">24</h3>
            <h3 className="text-2xl ">31</h3>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl font-bold">WED</h2>
            <h3 className="text-2xl opacity-50 justify-center">4</h3>
            <h3 className="text-2xl opacity-50">11</h3>
            <h3 className="text-2xl ">18</h3>
            <h3 className="text-2xl ">25</h3>
            <h3 className="text-2xl ">-</h3>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <h2 className="text-3xl font-bold">THU</h2>
            <h3 className="text-2xl opacity-50 justify-center">5</h3>
            <h3 className="text-2xl opacity-50">12</h3>
            <h3 className="text-2xl ">19</h3>
            <h3 className="text-2xl ">26</h3>
            <h3 className="text-2xl ">-</h3>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <h2 className="text-3xl font-bold">FRI</h2>
            <h3 className="text-2xl opacity-50 justify-center">6</h3>
            <h3 className="text-2xl opacity-50">13</h3>
            <h3 className="text-2xl ">20</h3>
            <h3 className="text-2xl ">27</h3>
            <h3 className="text-2xl ">-</h3>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-3xl font-bold">SAT</h2>
            <h3 className="text-2xl opacity-50 justify-center">7</h3>
            <h3 className="text-2xl opacity-50">14</h3>
            <h3 className="text-2xl ">21</h3>
            <h3 className="text-2xl ">28</h3>
            <h3 className="text-2xl ">-</h3>
          </div>
         </div>

        </div>

     </div>
    </main>
  );
}
