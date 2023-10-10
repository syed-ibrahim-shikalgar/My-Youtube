import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Ibrahim",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "Ibrahim",
    text: "lorem ipsum dolor sit",
    replies: [
      {
        name: "Ibrahim",
        text: "lorem ipsum dolor sit",
        replies: [
          {
            name: "Ibrahim",
            text: "lorem ipsum dolor sit",
            replies: [
              {
                name: "Ibrahim",
                text: "lorem ipsum dolor sit",
                replies: [
                  {
                    name: "Ibrahim",
                    text: "lorem ipsum dolor sit",
                    replies: [
                      {
                        name: "Ibrahim",
                        text: "lorem ipsum dolor sit",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Ibrahim",
                    text: "lorem ipsum dolor sit",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Ibrahim",
        text: "lorem ipsum dolor sit",
        replies: [],
      },
    ],
  },
  {
    name: "Ibrahim",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "Ibrahim",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "Ibrahim",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
  {
    name: "Ibrahim",
    text: "lorem ipsum dolor sit",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
