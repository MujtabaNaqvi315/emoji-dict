import './App.css';
import emojipedia from './emojipedia';
import Entry from './components/Entry';

function createEntry (item) {
  return <Entry 
    key = {item.id}
    emoji = {item.emoji}
    name = {item.name}
    meaning = {item.meaning}
  />
}

function App() {

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
