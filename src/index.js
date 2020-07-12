import m from 'mithril';
import './app.scss';

var data = {
    title: 'Mithril template',
    description: 'A minimal parcel template for mithril projects, supporting static assets and scss.' 
}
var appRoot = document.getElementById('app');

function App (vi) {
    return {
        view(v) {
            var { title, description } = v.attrs;
            return m( '.app',
                m('h1.app__title', title),
                m('p.app__description', description)
            )
        }
    }
}

m.mount(appRoot, {
    view() {
        return m(App, {...data})
    }});