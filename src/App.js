import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DynamicForm from './DynamicForm';
import './App.css'
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <header className="App-header">
                    <h1 style={{textAlign:"center"}}>Dynamic Form</h1>
                </header>
                <main>
                  <div className='formcls'>
                    <DynamicForm />
                    </div>
                </main>
            </div>
        </QueryClientProvider>
    );
};

export default App;
