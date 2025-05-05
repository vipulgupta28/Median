import { Routes, Route } from 'react-router-dom';
import React from "react";
import Landing from "../Pages/Landing/Landing";
import LoginAsEditorpage from '../Pages/Login/LoginAsEditorPage';
import LoginAsOwnerPage from '../Pages/Login/LoginAsOwnerPage';
import EditorJoiningFormPage from '../Pages/EditorJoiningFormPage/EditorJoiningFormPage';
import OwnerJoiningFormPage from '../Pages/OwnerJoiningFormPage/OwnerJoiningFormPage';
import WorkspacePage from '../Pages/WorkspacePage/WorkspacePage';

const AppRoutes:React.FC = () =>{
    return(
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/loginaseditorpage' element = {<LoginAsEditorpage/>}/>\
            <Route path='/loginasownerpage' element = {<LoginAsOwnerPage/>}/>
            <Route path="/editorjoiningformpage" element = {<EditorJoiningFormPage/>}/>
            <Route path="/ownerjoiningformpage" element = {<OwnerJoiningFormPage/>}/>
            <Route path="/workspacepage" element = {<WorkspacePage/>}/>
            
        </Routes>
    )
}

export default AppRoutes;