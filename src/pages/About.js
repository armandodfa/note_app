import React from 'react';

export const About = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Note App</h1>
                <p className="lead">Версия приложения: <strong>0.2.3</strong></p>
                <p className="lead">Модули для разработки
                        <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            node-sass
    <span class="badge bg-primary rounded-pill">7.0.1</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            react-router-dom
    <span class="badge bg-primary rounded-pill">6.2.2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            bootstrap
    <span class="badge bg-primary rounded-pill">5.1.3</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            axios
    <span class="badge bg-primary rounded-pill">0.26.1</span>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}