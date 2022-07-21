import { Container, Typography, Box, IconButton, Divider } from '@mui/material';
import { projectsList } from 'lib/projects';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from 'styles/Project.module.css'
import Image from 'next/image';
import clsx from 'clsx';
export default function Project({project = null}) {

    if(!project) {
        return null
    }
    
    return (
        <Container maxWidth="xl">
             <IconButton
                  aria-label="back"
                  className={styles.backButton}
                  href='/#projects'
                  size="large"
                >
                  <ArrowBackIcon size="md" />
            </IconButton>
            <Box>
                <Typography variant='h1' className={styles.title}>
                    {project.name}
                </Typography>
                <Box className={styles.projectInfo}>
                    <div className={styles.projectInfoContainer}>
                        <p> 
                            <span>Role:</span>
                            {project.role}
                        </p>
                        <p>
                            <span>Responsibilities:</span>
                            {project.responsibilities}
                        </p>
                        <p>
                            <span>duration:</span>
                            {project.duration}
                        </p>
                    </div>
                </Box>
                <Box className={styles.projectDefinition}>
                    <div>
                        <p> 
                            <span>Goal: </span>
                            {project.goal}
                        </p>
                        <p>
                            <span>Target audience: </span>
                            {project.target_audience}
                        </p>
                        <p>
                            <span>Challenges: </span>
                            {project.key_challenges}
                        </p>
                    </div>
                </Box>
                <Box>
                    <Typography variant='h3' className={styles.sectionTitle}>
                        Personas Definition
                    </Typography>
                    <Divider className={styles.divider} />
                    <div className={styles.personaContainer}>
                        {project.personas && project.personas.map(p => (
                            <div className={styles.personaImg} key={p.id}>
                                <Image src={p.url} alt={p.alt} layout='fill'/>
                            </div>
                        ))}
                    </div>
                </Box>
                {
                    project?.user_journey_map && (
                        <Box>
                            <Typography variant='h3' className={styles.sectionTitle}>
                            User Journey Map
                            </Typography>
                            <Divider className={styles.divider} />
                            <div className={styles.personaContainer}>
                                <div className={styles.personaImg}>
                                    <Image src={project.user_journey_map.url} alt={project.user_journey_map.alt} layout='fill'/>
                                </div>
                            </div>
                        </Box>
                    )
                }
                {
                    project?.research_study && (
                        <Box>
                            <Typography variant='h3' className={styles.sectionTitle}>
                              Research Study
                            </Typography>
                            <div className={styles.researchContainer}>
                                <p> 
                                    <span>Methodology: </span>
                                    {project.research_study.methodology}
                                </p>
                                <p>
                                    <span>Users: </span>
                                    {project.research_study.users}
                                </p>
                            </div>
                        </Box>
                    )
                }
                {
                    project?.user_testing_results && (
                    <Box>
                        <Typography variant='h3' className={styles.sectionTitle}>
                          Usability Study Results
                        </Typography>
                        <div className={styles.resultsContainer}>
                            <div className={styles.studyResults}>
                                {project.user_testing_results.themes.map(theme => (
                                    <p key={theme.id}>
                                        <span>Theme: </span>
                                        {theme.desc}
                                    </p>
                                ))}
                                {project.user_testing_results.insights.map(insight => (
                                    <p key={insight.id}>
                                        <span>Insight: </span>
                                        {insight.desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </Box>
                    )
                }
                {
                    project.storyBoards && (
                        <Box>
                            <Typography variant='h3' className={styles.sectionTitle}>
                                StoryBoards
                            </Typography>
                            <div className={styles.storyBoardContainer}>
                                <div className={styles.personaImg}>
                                    <Image src={project.storyBoards.storyboardBig.url} alt={project.storyBoards.storyboardBig.alt} layout='fill'/>
                                </div>
                                <div className={styles.personaImg}>
                                    <Image src={project.storyBoards.storyboardClose.url} alt={project.storyBoards.storyboardClose.alt} layout='fill'/>
                                </div>
                            </div>
                        </Box>
                    )
                }
                {
                    project.paper_design && (
                        <Box>
                            <Typography variant='h3' className={styles.sectionTitle}>
                                Initial Paper Design
                            </Typography>
                            <div className={styles.paperContainer}>
                                <div className={styles.personaImg}>
                                    <Image src={project.paper_design.url} alt={project.paper_design.alt} layout='fill'/>
                                </div>
                            </div>
                        </Box>
                    )
                }
                <section className={styles.wireframesContainer}>
                    <Typography variant='h3' className={styles.sectionTitle}>
                        Wireframes
                    </Typography>
                    <div className={styles.wireframe}>
                    { project.wireFrames.map(w => (
                        <div key={w.id}>
                            <div className={styles.wireframeImg} >
                                <Image src={w.url} alt={w.alt} layout='fill'/>
                            </div>
                            <p>{w.name}</p>
                        </div>
                    ))}
                    </div>
                </section>

                <section className={styles.mockupsContainer}>
                    <Typography variant='h3' className={styles.sectionTitle}>
                        Mockups
                    </Typography>
                    <div className={styles.mockup}>
                    { project.mockups.map(m => (
                        <div key={m.id}>
                            <div className={clsx (styles.mockupImgWeb , 
                                [m.name.includes('mobile') && styles.mockupImg]
                            )} >
                                <Image src={m.url} alt={m.alt} layout='fill'/>
                            </div>
                            <p>{m.name}</p>
                        </div>
                    ))}
                    </div>
                </section>
                {
                    project.sitemap && (
                        <Box>
                             <Typography variant='h3' className={styles.sectionTitle}>
                               Sitemap
                            </Typography>
                            <div className={styles.sitemapContainer}>
                                <div className={styles.personaImg}>
                                    <Image src={project.sitemap.url} alt={project.sitemap.alt} layout='fill'/>
                                </div>
                            </div>
                        </Box>
                    )
                }
                <section className={styles.conclusion}>
                    <Typography variant='h3' className={styles.sectionTitle}>
                        Conclusion
                    </Typography>
                    <div className={styles.conclusionContainer}>
                        <p>{project.conclusion}</p>
                    </div>
                </section>

            </Box>

        </Container>
    )
}


export async function getStaticPaths() {
    const projects = await projectsList
    const paths = projects.map(project => {
        return {
            params: { id: project.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const projectFilter = await projectsList.filter(p => {
        return p.id.toString() === params.id;
    })
    const project =  projectFilter[0]
    return {
        props: {
            project
        }
    }
}