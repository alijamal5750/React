import React,{useEffect,useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useDispatch,useSelector } from 'react-redux'
import { getGroups, getPermissions, savePermissions } from '../../redux/actions/authAction'

const AdminAddSubCategory = () => {

    const dispatch = useDispatch()
    const [groups,setGroups] = useState([])
    const[groupId,setGroupId] = useState()
    const[loading,setLoading]=useState(true)
    const[loadingPermission,setLoadingPermissions]=useState(true)
    const[saveLoading,setSaveLoading] = useState(true)

    // Permissions
    const[userIndex,setUserIndex]   = useState()
    const[userCreate,setUserCreate] = useState()
    const[userEdit,setUserEdit]     = useState()
    const[userDelete,setUserDelete] = useState()
    const[userLogged,setUserLogged] = useState()

    useEffect(()=>{
        const get=async()=>{
        setLoading(true)
        await dispatch(getGroups())
        setLoading(false)
        }
        get()
    },{})

    const resGroups = useSelector(state=>state.auth.getGroups)
    useEffect(()=>{
        if(loading===false){
            if(resGroups)
            setGroups(resGroups)
        }
    },[loading])

    const selectGroupWhenChange=async(e)=>{
        setGroupId(e.target.value)

        if(e.target.value >=1){
            setLoadingPermissions(true)
           await dispatch(getPermissions(e.target.value))    
           setLoadingPermissions(false)
        }
    }

    const resPermissions = useSelector(state=>state.auth.getPermissions)
    useEffect(()=>{
        if(loadingPermission === false){
            if(resPermissions)
            {
                // assagin
                setUserIndex(resPermissions.userIndex)
                setUserCreate(resPermissions.userCreate)
                setUserEdit(resPermissions.userEdit)
                setUserDelete(resPermissions.userDelete)
                setUserLogged(resPermissions.userLogged)
            }
        }
    },[loadingPermission])

    const handleSave=async()=>{
        setSaveLoading(true)
        await dispatch(savePermissions(groupId,{
            UserIndex:userIndex,
            UserCreate:userCreate,
            UserEdit:userEdit,
            UserDelete:userDelete,
            UserLogged:userLogged
        }))
        setSaveLoading(false)
    }

    const resSave = useSelector(state=>state.auth.savePermissions)
    useEffect(()=>{
        if(saveLoading ===false){
            if(resSave)
            {
                console.log(resSave)
                if(resSave.status === 405)
                alert('حصل خطأ')
                if(resSave.status === 200)
                alert('تم حفظ التعديلات')
            }
        }
    },[saveLoading])

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">تعديل صلاحيات كروبات</div>
                <Col sm="8">
                 
                <select className="select mt-3 px-2 " onChange={selectGroupWhenChange}>
                <option value="0">اختر كروب</option>
                {
                    groups.length >=1 ? (groups.map((item,index)=>{
                        return(
                            
                            <option index={index} value={item.id}>{item.name}</option>
                        )
                    })) : null
                }
                </select>
                </Col>
            </Row>

            <Table bordered hover size="sm" style={{marginTop:12,width:500,textAlign:'center'}}>
            <thead>
              <tr>
                <th>user Index</th>
                <th>user Create</th>
                <th>user Edit</th>
                <th>user Delete</th>
                <th>user Logged</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td><input type='checkbox' checked={userIndex}  onChange={(e)=>setUserIndex(e.target.checked)}/></td>
                <td><input type='checkbox' checked={userCreate} onChange={(e)=>setUserCreate(e.target.checked)}/></td>
                <td><input type='checkbox' checked={userEdit}   onChange={(e)=>setUserEdit(e.target.checked)}/></td>
                <td><input type='checkbox' checked={userDelete} onChange={(e)=>setUserDelete(e.target.checked)}/></td>
                <td><input type='checkbox' checked={userLogged} onChange={(e)=>setUserLogged(e.target.checked)}/></td>
              </tr>
            </tbody>
          </Table>    

            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSave} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddSubCategory
