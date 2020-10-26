const prefix = 'https://github.com/evolvable-by-design/use-cases/spaghetti-makes-me-moody/vocab#'

export default {
  terms: {
    description: `http://schema.org/description`,
    history: `${prefix}history`,
    userName: `${prefix}userName`,
    password: `${prefix}password`,
    textToAnalyze: `${prefix}textToAnalyze`,
    analysisDate: `${prefix}analysisDate`,
    analysisEntry: `${prefix}analysisEntry`,
    sentiment: `${prefix}sentiment`,
    feelingScore: `${prefix}feelingScore`,
    analysisFeedback: `${prefix}analysisFeedback`,
    classification: `${prefix}classification`,
  },
  actions: {
    analyze: `${prefix}analyze`,
    createUser: `${prefix}createUser`,
  }
}
