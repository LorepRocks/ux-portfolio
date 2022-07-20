/* eslint-disable react/no-unescaped-entities */
import { Button } from '@mui/material'
import styles from 'styles/Home.module.css'
import { ReactSVG } from 'react-svg'
import Header from 'components/Header'
import EventIcon from '@mui/icons-material/Event';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


export default function Home() {
  return (
    <div className={styles.container}>
        <main id='home' className={styles.main}>
          <Header/>
          <div className={styles.avatar}>
            <ReactSVG src='/loreprocks.svg'/>
          </div>
          <div>
            <h1 className={styles.title}>
              Hi I'm <span>Lorena!</span>
            </h1>
            <p className={styles.description}>
                I'm a Web Developer & UX Designer
            </p>
            <div className={styles.socialContainer}>
              <div className={styles.social}>
                <a href='#'>
                  <ReactSVG src='/email.svg'/>
                </a>
              </div>
              <div className={styles.social}>
                <a href='#'>
                <ReactSVG src='/calendar.svg'/>
                </a>
              </div>
              <div className={styles.social}>
                <a href='#'>
                  <ReactSVG src='/linkedin.svg'/>
                </a>
              </div>
              <div className={styles.social}>
                <a href='#'>
                  <ReactSVG src='/behance.svg'/>
                </a>
              </div>
            </div>
            
          </div>
        </main>
        <section id='projects' className={styles.projects}>
          <div className={styles.projectTitle}>UX Projects</div>
          <div className={styles.gridProjects}>
            <div className={styles.projectItem}>
              <ReactSVG src='/ichoose.svg' className={styles.illustration}/>
              <p>iChoose</p>
              <div className={styles.projectDesc}>
              <span>iChoose</span> is an app that allows you to make a restaurant reservation. Also, facilitates the manage of your reservation, cancel or even select the menu before you arrived to the restaurant.
              </div>
              <Button 
                href={'/projects/1'}
                variant='outlined' 
                size='large' 
                className={styles.projectButton}>
                  See Project
              </Button>
            </div>
            <div className={styles.projectItem}>
              <ReactSVG src='/book.svg' className={styles.illustration}/>
              <p>BookNotes</p>
              <div className={styles.projectDesc}>
              When you highlight a phrase in one of the books you're reading is easy to forget in the future where was that exactly phrase. But with <span>BookNotes</span> app users don't have to worry about that, they can save all the notes and organize by book and always get the information right there!
              </div>
              <Button 
                href={'/projects/2'}
                variant='outlined' 
                size='large' 
                className={styles.projectButton}>
                  See Project
              </Button>
            </div>
            <div className={styles.projectItem}>
              <ReactSVG src='/test.svg' className={styles.illustration}/>
              <p>LocalHub</p>
              <div className={styles.projectDesc}>
                Do you want to make new friends or just help the world to be a better place? <span>LocalHub</span> is an app that helps people to find the right place to start service in local community.
              </div>
              <Button 
                href={'/projects/3'}
                variant='outlined' 
                size='large' 
                className={styles.projectButton}>
                  See Project
              </Button>
            </div>

          </div>
        </section>

        <footer className={styles.footer}>
          <div>
            Power by <span>Lorena Rojas</span> ® 2022
          </div>
        </footer>
    </div>
  )
}
