import * as React from "react";
import "../styles/HomePage.css"
import Header from "./Header";
export default class HomePage extends React.Component<any,any> {
    render(){
        return(
            <div className="container-fluid">
                <Header head = 'Добро пожаловать' flag = 'false'/>
                {/*page body*/}
                <div className="row">
                    {/*information*/}
                    <div className="col-8">
                        <h3 className="headerInfo">Информация о сайте</h3>
                        <p className='textInfo'>
                            Антошка, Антошка, пойдём копать картошку,
                            Антошка, Антошка, пойдём копать картошку,
                            Тили-тили трали-вали
                            Это мы не проходили, это нам не задавали
                            Тили-тили, трали-вали
                            Это мы не проходили, это нам не задавали
                            Па-рам-пам-пам, Па-рам-пам-пам

                            Антошка, Антошка, сыграй нам на гармошке,
                            Антошка, Антошка, сыграй нам на гармошке,
                            Тили-тили трали-вали
                            Это мы не проходили, это нам не задавали
                            Тили-тили, трали-вали
                            Это мы не проходили, это нам не задавали
                            Па-рам-пам-пам, Па-рам-пам-пам

                            Антошка, Антошка, готовь к обеду ложку
                            Антошка, Антошка, готовь к обеду ложку
                            Тили-тили трали-вали
                            Это братцы мне по силе, откажусь теперь едва ли
                            Тили-тили, трали-вали
                            Это братцы мне по силе, откажусь теперь едва ли
                            Па-рам-пам-пам, Па-рам-пам-пам
                        </p>
                    </div>

                    {/*about doctor*/}
                    <div className="col-4 border-left border-secondary">
                        <h3 className="headerHomePage">Информация о глав враче</h3>
                        <img src='../../src/images/g.jpg' alt='doctor_photo' className="rounded-circle"/>
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


