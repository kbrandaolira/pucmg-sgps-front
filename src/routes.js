import {BrowserRouter, Route, Routes} from 'react-router-dom';


import AssociateList from './components/Associates/AssociateList';
import AssociateForm from './components/Associates/AssociateForm';
import ExamList from './components/Associates/Exams/ExamList';


const Router = () => (
    <BrowserRouter >
        <Routes>
            <Route exact path="/" element={<AssociateList/>}/>
            <Route path="/associate/form" element={<AssociateForm/>}/>
            <Route path="/associate/exams/*" element={<ExamList/>}/>
        </Routes>
    </BrowserRouter>
);
   
export default Router;