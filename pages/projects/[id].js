export default function Project() { 
    return <h1>Post id</h1>
}


export async function getStaticPaths() {
    // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
}