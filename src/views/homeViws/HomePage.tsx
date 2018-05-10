import * as React from "react";
import "../../styles/HomePage.css"
import {img_doctor} from "../../data/doctor";
import {User} from "../../models/User";
import Header from "../Header";
import Registration from "./RegistrationApplication";

//todo: doctor profile, patient profile, images for Patient and Doctor

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class HomePage extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
     return(
         <div className="container">
             <Header onLogin={onLogin}  user={user} head = 'Добро пожаловать!' mainHeader={true} />
             <div className="row">
                 <div className="col-8">
                     <h3 className="headerHomePage">Информация о сайте</h3>
                     <p className='textInfo'>
                         После регистрации вы получите возможность завести электронную медицинскую карточку.
                         Вы сможете выбрать себе любого из наших специалистов и добавить к себе в профиль, после этого , выбранный вами врач получит доступ
                         к вашей карточке и сможет оставлять там свои записи, назначать лечение.
                         Назначенное лечение и рекоммендации врача вы всегда сможете просмотреть в вашей электронной карточке в режиме онлайн.
                         Добро пожаловать!</p>
                     <p className="newP">
                         <button type="button" className="btnSignUp " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" >Оставить заявку</button>
                         <Registration/>
                     </p>
                 </div>
                 <div className="col-4 border-left border-secondary">
                     <h3 className="headerHomePage">Глав врач</h3>
                     <img src={img_doctor} alt='doctor_photo' className="rounded-circle img-fluid d-block mx-auto"/>
                     <p className='text'>
                        Врачев врач врачевич
                     </p>
                 </div>
             </div>
         </div>
     )
    }
}


