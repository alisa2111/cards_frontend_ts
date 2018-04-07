import * as React from "react";
import "../../styles/HomePage.css"
import Header from "../Header";
import {img_doctor} from "../../data/doctor";
import {User} from "../../models/User";
import Registration from "./RegistrationApplication";

interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class HomePage extends React.Component<Props,any> {

    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin}  user={user} head = 'Добро пожаловать!' mainHeader={true} />
                <div className="row">
                    <div className="col-8">
                        <h3 className="headerInfo">Информация о сайте</h3>
                        <p className='textInfo'>
                       После регистрации вы получите возможность завести электронную медицинскую карточку.
                            Вы сможете выбрать себе любого из наших специалистов и добавить к себе в профиль, после этого , выбранный вами врач получит доступ
                            к вашей карточке и сможет оставлять там свои записи, назначать лечение.
                            Назначенное лечение и рекоммендации врача вы всегда сможете просмотреть в вашей электронной карточке в режиме онлайн.
                            Добро пожаловать!
                        </p>
                        <button type="button" className="btnSignUp " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" >Отправить заявку для регистрации</button>
                        <Registration/>
                    </div>
                    <div className="col-4 border-left border-secondary">
                        <h3 className="headerHomePage">Информация о глав враче</h3>
                        <img src={img_doctor} alt='doctor_photo' className="rounded-circle"/>
                        <p className='text'>
                            В траве сидел кузнечик
                            в траве сидел кузнечик
                            Совсем как огуречик
                            зелененький он был
                            Представьте себе представьте себе
                            Совсем как огуречик
                            Представьте себе представьте себе
                            Зелененький он был
                            Он ел одну лишь травку
                            он ел одну лишь травку
                            Не трогал и козявку
                            и с мухами дружил
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


