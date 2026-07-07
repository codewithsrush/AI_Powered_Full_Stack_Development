import Card from './components/Card';

const App = () => {
  return (
    <div className='Parent'>
      <Card user='Srushti Mhaske' role ='Full Stack Developer' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MV7nUlh7aMCvHyaxC278FZDvRzulNBK9yuvRZ8vcNg&s=10' />;
      <Card user='Sakshi Singh' role ='Frontend Developer' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeptp9XXymzwbswS_pYHg6QsgzPthcAyIdy8Dzzm0aNw&s=10'/>;
      <Card user='Sam Roy' role ='AI ML Engineer' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOC4FS02JOxKQzT-5J9DWY9NBRno8xM4ZP07jYNiPMFg&s=10' />;

    </div>
    
  )
}

export default App
