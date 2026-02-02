# Simple-Messages-App

**Simple Messages App** - қарапайым fullstack- жоба.
Веб-қосымша:
- қолданушы формада өз **атын** және **мәтіндік хатты** енгізуге
- хатты серверге жіберуге
- жіберілген хаттарды форманың астынан көруге мүмкіндік береді

## Тапсырма
Фрондендті Flask-бэкендпен және C#-бэкендпен кезек кезек қосу

## Жобаны қосу
Жобада екі бэкенд бар:
- Python (Flask)
- C# (ASP.NET Minimal API)
- Фронтенд (React) кез келгенімен жұмыс жасайды

Бір уақытта **ТЕК БІР** ғана серверді іске қосыңыз

## Жоба құрылымы
```
backend-dotnet/  - C# + Minimal API (backend)
backend-flask/   - Python + Flask (backend)
client/          - React (frontend)
```

## Талаптар
- Node.js 18+ 
- npm
- Python 3.10+
- pip
- .NET SDK 9

Тексеру:
```
node -v
npm -v
python --verison
dotnet --verison
```

## Python-бэкендті іске қосу
### Бэкендті іске қосу (Python)
```
cd backend-flask
python -m venv venv
```

Виртуалды ортаны активациялау:
```
venv\Scripts\activate
```

Тәуелділіктерді орнату және іске қосу:
```
pip install Flask
python app.py
```
Бэкенд келесі адрес бойынша қол жетімді болады
```
http://localhost:5000
```

### Фронтенді іске қосу
Жаңа терминалда:
```
cd client
npm install
npm start
```
Фронтенд келесі адрес бойынша қол жетімді болады
```
http://localhost:3000
```

## C#-бэкендті іске қосу
Екінші бэкендті қосар алдында міндетті түрде, Python-бэкендті тоқтатыңыз
### Бэкендті іске қосу (C#)
```
cd backend-dotnet
dotnet restore
dotnet run --project src\backend-dotnet --urls "http://localhost:5000"
```
Бэкенд келесі адрес бойынша қол жетімді болады:
```
http://localhost:5000
```
Фронтенд қосулы тұрса оны қайтадан қосудың қажеті жоқ
