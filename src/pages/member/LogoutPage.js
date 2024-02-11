import LogoutComponent from "../../components/member/LogoutComponent";
import BasicMenu from "../../components/menus/BasicMenu";

const LogoutPage = () => {
    return (
        <div className="fiexd top-0 left-0 z-[1055] flex flex-col h-full w-full">
            <BasicMenu/>

            <div className="flex flex-wrap w-full h-full justify-center items-center border-2">
                <LogoutComponent/>
            </div>
        </div>

    );
}

export default LogoutPage;