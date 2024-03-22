const React = require('react');
const Layout = require('./Layout');
const TeaCard = require('./TeaCard')

function AdminPage({ title, user, teas}) {

    return (
        <>
            <Layout user={user} title={title}>
                <h1>Страница админа</h1>

                <div className='tea_container'>

                    {teas.map((tea) => (
                            <TeaCard tea={tea} user={user} />
            
                    ))}
                </div>

            </Layout>
        </>
    );
};

module.exports = AdminPage;