import './App.css';
import emojipedia from './emojipedia';
import Entry from './components/Entry';

function App() {

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(item => (
          <Entry 
            key = {item.id}
            emoji = {item.emoji}
            name = {item.name}
            meaning = {item.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
