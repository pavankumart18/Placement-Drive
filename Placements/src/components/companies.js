import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
function Student(props){

    return (
        <div>
            <Header />
            <div className="container">
                <div>
                    <h1><i class="fa-sharp fa-solid fa-g"></i> Google</h1>
                    <p>Google LLC is an American multinational
                         technology company focusing on search engine technology, online advertising, cloud computing, 
                         computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.
                          It has been referred to as "the most powerful company in the world" and one of the world's
                           most valuable brands due to its market dominance, data collection, and technological advantages 
                           in the area of artificial intelligence. Its parent company Alphabet is considered one of the Big
                         Five American information technology companies, alongside Amazon, Apple, Meta, and Microsoft.</p>
                </div>
                <hr />
                <div>
                    <h1>Microsoft</h1>
                    <p>Microsoft Corporation is an American multinational technology corporation producing computer software, 
                        consumer electronics, personal computers, and related services. Headquartered at the Microsoft campus in Redmond,
                         Washington, Microsoft's best-known software products are the Windows line of operating systems,
                          the Microsoft Office suite, and the Internet Explorer and Edge web browsers.
                           Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface
                            lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 
                            rankings of the largest United States corporations by total revenue; it was 
                            the world's largest software maker by revenue as of 2019. It is one of the Big
                             Five American information technology companies, alongside Alphabet, Amazon, Apple, and Meta.</p>
                </div>
                <hr />
                <div>
                    <h1>Wipro</h1>
                    <p>Wipro Limited is an Indian multinational 
                        corporation that provides information technology, consulting and business process services.
                         Thierry Delaporte is serving as CEO and managing director of Wipro since July 2020.
                         Wipro's capabilities range across cloud computing, cyber security, 
                         digital transformation, artificial intelligence, robotics, data analytics, 
                         and other technology consulting services to customers in 167 countries.</p>
                </div>
                </div>
        </div>
    )
}

export default Student;