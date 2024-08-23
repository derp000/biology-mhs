import { NavLink } from "react-router-dom";
import { ExternalLinkOutline } from "@emotion-icons/evaicons-outline/ExternalLinkOutline";

const Advice = () => {
  return (
    <div className="bg-emerald-800">
      <div className="max-w-[72rem] bg-slate-100 mx-auto p-24">
        <h1 className="font-bold text-3xl">1. Take notes before class</h1>
        <p className="text-xl ml-12">
          You will find most classes are taught lecture style. Thus if you don't
          read the textbook and take notes beforehand, you may find it difficult
          to keep up.
        </p>
        <h2 className="font-bold text-2xl mt-3">1a. Key Benefits</h2>
        <ul className="text-xl ml-12 mt-2 list-disc">
          <li>
            Pre-reading helps pinpoint what you don't understand—class time is
            perfect opportunity to ask questions!
          </li>
          <li>
            Often, Dr. Gupta may add additional insight than what is presented
            on the slides/textbook, so you can just focus on adding that
            supplementary info to your notes rather than cramming to jot down
            everything
          </li>
        </ul>
        <h2 className="font-bold text-2xl mt-3">1b. How to take notes</h2>
        <p className="text-xl ml-12 mt-2">
          There are two main note-taking styles that I find helpful:{" "}
          <NavLink
            to={`https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/`}
            target="_blank"
            className={"underline"}
          >
            Cornell system{""}
            <sup>
              <ExternalLinkOutline height={15} width={15} />
            </sup>
          </NavLink>{" "}
          and printed slides. A key part of both styles is that you must{" "}
          <span className="font-semibold">handwrite</span> them! Printed slides
          are great, but they waste a lot of paper. Personally, I use a modified
          Cornell system. On the left, I put important concepts, vocab, chapter
          headings, and questions. On the right, I elaborate on the concepts,
          define the vocab, and answer the questions (after getting a response
          in class). To make everything more clear, I use several highlighters
          to color-code every type of cue.
        </p>
        <h1 className="font-bold text-3xl mt-8">
          2. Study intentionally and efficiently
        </h1>
        <p className="text-xl ml-12">
          Biology can seem really overwhelming, but it's crucial that you don't
          fall into the trap of rote-memorization. Here are several do-s and
          don't-s.
        </p>
        <h2 className="font-bold text-2xl mt-3">2a. DO: Quiz yourself</h2>
        <p className="text-xl ml-12 mt-2">
          It may be tempting to go straight into reviewing your notes—but unless
          you absolutely forgot everything, try testing yourself first with the
          quizzes on Magnet BioMentor, which handpicks fuundamental and
          critical-thinking questions which you may encounter. If that's not
          enough, consider using end-of-chapter textbook questions or the
          textbook quizzing websites which Magnet BioMentor hand-picks questions
          from (
          <NavLink
            to={`https://highered.mheducation.com/sites/0072919345/student_view0/chapter1/multiple_choice_quiz.html`}
            target="_blank"
            className={"underline"}
          >
            Freshman Biology Quizzes{""}
            <sup>
              <ExternalLinkOutline height={15} width={15} />
            </sup>
          </NavLink>
          {" and "}
          <NavLink
            to={`https://media.pearsoncmg.com/bc/bc_campbell_biology_11/msa/content/practice-test/app/`}
            target="_blank"
            className={"underline"}
          >
            AP Biology Quizzes{""}
            <sup>
              <ExternalLinkOutline height={15} width={15} />
            </sup>
          </NavLink>
          ).
        </p>
        <h2 className="font-bold text-2xl mt-3">2b. DO: Re-read your notes</h2>
        <p className="text-xl ml-12 mt-2">
          After quizzing yourself and finding those gaps of knowledge, you
          should now go back to your notes, textbook, etc. to re-learn the
          concepts you forgot. You may find it helpful to do this with a friend
          and continue to mini-quiz each other as you both review.
        </p>
        <h2 className="font-bold text-2xl mt-3">2c. DO: Make mind maps</h2>
        <p className="text-xl ml-12 mt-2">
          Mind maps are versatile—you can make them as soon as you start
          studying (as another way to identify knowledge gaps), in the middle of
          studying, or at the end of studying/day of a test. As you're creating
          one, make sure to mentally/verbally (if you're with a friend) explain
          the connections between the concepts. For example, what's the
          connection between glycolysis and it being the most common catabolic
          pathway on earth? It's the fact that glycolysis occurs in the cytosol,
          thereby predating pathways dependent on membrane-bound organelles.
        </p>
        <h2 className="font-bold text-2xl mt-3">
          2d. DON'T: Rely on flashcards
        </h2>
        <p className="text-xl ml-12 mt-2">
          You're studying for freshman biology, not the MCAT! Flashcards might
          help you memorize isolated facts, but they won't be as helpful when it
          comes to applying your knowledge to critical-thinking MCQs or
          open-ended questions. Flashcards might end up working for you
          anyways—I used flashcards my freshman year and did fine—but it's a
          rather inefficient and passive way of studying. Use flashcards as a
          supplementary study tool at most.
        </p>
        <h2 className="font-bold text-2xl mt-3">
          2e. DON'T: Wait until the last minute
        </h2>
        <p className="text-xl ml-12 mt-2">
          This won't be an issue if you are pre-reading, taking notes, and
          getting your questions answered in class. In fact, by doing your
          due-diligence, you will find that you'll only have to full-on study
          the day before an exam, since you've already been going over your
          notes, quizzing yourself, etc. a little bit every day.
        </p>
      </div>
    </div>
  );
};

export default Advice;
