const React = require('react');


function TeaCard({tea}){
return(
    <div className='TeaCard_container'>
    <div className='TeaCard_item'>
     <img src={tea.img} className='teaCard_img'/>
     <p className='teaCard_title'>{tea.title}</p>
     <p className='teaCard_area'>{tea.area}</p>
     <p className='teaCard_description'>{tea.description}</p>
     <button className='teaCard_btn-update'>обновить</button>
     <button className='teaCard_btn-delete'>удалить</button>
    </div>
    </div>

)


}
module.exports = TeaCard