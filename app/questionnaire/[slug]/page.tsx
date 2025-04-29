import { questionnaires } from "@/app/api/data"

export default function Page({ params }: { params: { slug: number } }) {

    const questionnaire = questionnaires.find(q => q.id === params.slug);

    return(
        <main>
            <div>
                {questionnaire?.title}
            </div>
        </main>
    );
  }