import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/store';
import './NavigationBar.css'

export default observer( function NavBar()
{
    const state = {  
        home: '#',
        about: '/',
        project: '#project',
        activities: '/activities',
        createActivity: '/application'
    }

    const {activityStore} = useStore(); 

    return  (  
        <div className="container-fluid p-0 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark pl-5 pr-5 pt-2 pb-2">
                        <a className="navbar-brand ml-5" href={state.home}>MHZ</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end pr-5" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active mx-2" href={state.about}>About</a>
                                <a className="nav-link mx-2" href={state.activities}>Activities</a>
                                <a className="nav-link mx-2" href='/errors'>Errors</a>
                                <a href="/createActivity" className="btn btn-success mx-2">Create Activity</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
})