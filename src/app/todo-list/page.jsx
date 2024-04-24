import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default function ToDoPage(){
    return(
        <div>
            <div className="flex justify-between">
                <div className="w-[20%]">
                    <SidebarComponent/>
                </div>
                <div className="w-[78%]">
                    <div>
                        <NavbarComponent/>
                    </div>
                    <div className="w-full">
                        <ListBoardComponentHeader/>
                    </div>
                </div>
            </div>
        </div>
    )
}