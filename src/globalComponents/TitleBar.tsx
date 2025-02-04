import { Outlet } from "react-router";
// import { HiOutlineMinusSm } from "react-icons/hi";
// import { HiOutlineX } from "react-icons/hi";
// import { hstack } from "../../styled-system/patterns";
// import { css } from "../../styled-system/css";

export function TitleBar(){
    return(
        <>
            {/* <div className={css({display: 'flex',justifyContent: 'space-between', color: 'white', backgroundColor: 'blue.600'})}>
                <p>title bar</p>
                <div className={hstack({gap: 0})}>
                    <div className={css({padding: '4', transition: '0.2s',_hover:{ backgroundColor: 'gray.100' }})}><HiOutlineMinusSm className={css({fontSize: '18'})}/></div>
                    <div className={css({padding: '4', transition: '0.2s',_hover:{ backgroundColor: 'gray.100' }})}><HiOutlineX className={css({fontSize: '18'})}/> </div>
                </div>
            </div> */}
            <Outlet />
        </>

    )
}