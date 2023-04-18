import NavSection from "./components/NavSection";
import HeroSection from "./components/HeroSection";
import ArticleSection from "./components/ArticleSection";
import tent from "./assets/tent.webp";
import people from "./assets/people.webp";
import android from "./assets/android.webp"
import cloud from "./assets/cloud.webp"
import firebase from "./assets/firebase.webp"
import flutter from "./assets/flutter.webp"

const keynotes = [
        {
            image: tent,
            title: 'Google I/O keynote',
            tags: ['keynote']
        },
        {
            image: people,
            title: 'Developer keynote',
            tags: ['keynote']
        },
    ]

const featuredSessions = [
    {
        image: android,
        title: 'What\'s new in Android',
        preview: 'Hear the latest news on everything happening in the world of Android development: Android 13, Jetpack, tooling, perfo...',
        tags: ['Beginner', 'Android', 'keynote']
    },
    {
        image: cloud,
        title: 'The cloud build for developers',
        preview: 'Learn how Google Cloud and Workspace teams are building cloud services to help developers and technologists create tr...',
        tags: ['Intermediate', 'Cloud', 'keynote']
    },
    {
        image: firebase,
        title: 'What\'s new in Firebase',
        preview: 'Learn how to build and run apps users love with Firebase, a platform designed to help throughout your business’ journey.',
        tags: ['beginner', 'Firebase', 'keynote']
    },
    {
        image: flutter,
        title: 'What\'s new in Flutter',
        preview: 'Learn the latest from Flutter including how to build beautiful native apps for six platforms from a single codebase.',
        tags: ['beginner', 'Flutter', 'keynote']
    },
]


const App = () => {
  return (
      <>
          <NavSection />
          <HeroSection />
          <ArticleSection title="Watch the keynotes" articles={keynotes} />
          <ArticleSection title="Featured sessions" articles={featuredSessions} />
      </>
  );
}

export default App;
