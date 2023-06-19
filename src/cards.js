import { v4 as uuidv4 } from 'uuid';

export const toDocards = [
    {
      "id": uuidv4(),
      "completed": "false",
      "importance": "low",
      "title": "Brainstorming",
      "textDescription": "Brainstorming brings team members' diverse experience into play.",
      "imageDescription": [],
      "comments": "12",
      "assignedTo": [
        {
          "src": "1guy.png",
          "alt": "guy"
        },
        {
          "src": "3guy.png",
          "alt": "guy2"
        },
        {
          "src": "4guy.png",
          "alt": "guy3"
        }
      ]
    },
    {
      "id": uuidv4(),
      "completed": "false",
      "importance": "high",
      "title": "Research",
      "textDescription": "User research helps you to create an optimal product for users.",
      "imageDescription": [],
      "comments": "10",
      "files": "3",
      "assignedTo": [
        {
          "src": "2girl.png",
          "alt": "guy"
        },
        {
          "src": "3girl.png",
          "alt": "guy2"
        }
      ]
    }
  ]
export const onProgressCards =[
    {
      "id": uuidv4(),
      "completed": "false",
      "importance": "low",
      "title": "Onboarding Illustrations",
      "imageDescription": ["rose.png"],
      "comments": "14",
      "files": "15",
      "assignedTo": [
        {
          "src": "3guy.png",
          "alt": "guy"
        },
        {
          "src": "4guy.png",
          "alt": "guy2"
        },
        {
          "src": "1guy.png",
          "alt": "guy3"
        }
      ]
    },
    {
      "id": uuidv4(),
      "completed": "false",
      "importance": "low",
      "title": "Moodboard",
      "imageDescription": ["pot.png", "pup.png"],
      "comments": "9",
      "files": "10",
      "assignedTo": [
        {
          "src": "3guy.png",
          "alt": "guy"
        }
      ]
    }
  ]

export const completedCards = [
    {
      "id": uuidv4(),
      "completed": "true",
      "importance": "high",
      "title": "Mobile App Design",
      "imageDescription": ["app-design.png"],
      "comments": "12",
      "files": "15",
      "assignedTo": [
        {
          "src": "3girl.png",
          "alt": "guy"
        },
        {
          "src": "4guy.png",
          "alt": "guy2"
        }
      ]
    },
    {
      "id": uuidv4(),
      "importance": "low",
      "completed": "true",
      "title": "Design System",
      "textDescription": "It just needs to adapt the UI from what you did before",
      "imageDescription": [],
      "comments": "12",
      "files": "15",
      "assignedTo": [
        {
          "src": "1guy.png",
          "alt": "guy"
        },
        {
          "src": "3guy.png",
          "alt": "guy2"
        },
        {
          "src": "4guy.png",
          "alt": "guy3"
        }
      ]
    }
  ]
