import { Container, Typography, Box, IconButton, Divider } from '@mui/material';
import { projectsList } from 'lib/projects';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'
import styles from 'styles/Project.module.css'
import Header from 'components/Header'
import Image from 'next/image';
const Project  = ({project}) => {
    const router = useRouter()
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
                    project.user_journey_map && (
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
                    project.research_study && (
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
                    project.user_testing_results && (
                    <Box>
                        <Typography variant='h3' className={styles.sectionTitle}>
                          Usability Study Results
                        </Typography>
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
                    </Box>
                    )
                }

            </Box>

        </Container>
    )
}


export async function getStaticPaths() {
    const projects = projectsList
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

export function getStaticProps({ params }) {
    const projectFilter = projectsList.filter(p => {
        return p.id.toString() === params.id;
    })
    const project =  projectFilter[0]
    return {
        props: {
            project
        }
    }
}

export default Project