import * as React from "react";
import "../styles/HomePage.css"
import Header from "./Header";
import {img_doctor} from "../data/doctor";
import {User} from "../models/User";
interface Props{
    user?: User
    onLogin: (user: User) => void
}
export default class HomePage extends React.Component<Props,any> {
    render(){
        const {onLogin , user} = this.props;
        return(
            <div className="container-fluid">
                <Header onLogin={onLogin}  user = {user} head = 'Добро пожаловать!' links_before_auth={true} />
                {/*page body*/}
                <div className="row">
                    {/*information*/}
                    <div className="col-8">
                        <h3 className="headerInfo">Информация о сайте</h3>
                        <p className='textInfo'>
                       После регистрации вы получите возможность завести электронную медицинскую карточку.
                            Вы сможете выбрать себе любого из наших специалистов и добавить к себе в профиль, после этого , выбранный вами врач получит доступ
                            к вашей карточке и сможет оставлять там свои записи, назначать лечение.
                            Назначенное лечение и рекоммендации врача вы всегда сможете просмотреть в вашей электронной карточке в режиме онлайн.
                            Добро пожаловать!
                        </p>
                    </div>

                    {/*about doctor*/}
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
                            Представьте себе представьте себе
                            Не трогал и козявку
                            Представьте себе представьте себе
                            И с мухами дружил
                            Но вот пришла лягушка
                            но вот пришла лягушка
                            Прожорливое брюшко и съела кузнеца
                            Представьте себе представьте себе
                            Прожорливое брюшко
                            Представьте себе представьте себе
                            И съела кузнеца
                            Не думал не гадал он не думал не гадал он
                            Никак не ожидал он такого вот конца
                            Представьте себе представьте себе
                            Никак не ожидал он
                            Представьте себе представьте себе
                            Такого вот конца
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


