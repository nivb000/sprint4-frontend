import { useSelector } from "react-redux"
import { BasicTable } from "../cmps/basic-table"
import { MyChart } from "../cmps/my-chart"   

export const HostDashboard = () => {

    const stays = useSelector(state => state.stayModule.stays)

    
    return <div >
        <MyChart  />        
        <BasicTable  />        
    </div>
}