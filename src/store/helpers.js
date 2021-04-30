export const trimRecipe = data => {
    const { id, title, image, readyInMinutes, servings, extendedIngredients, analyzedInstructions, sourceUrl, creditsText} = recipe
    return ({
      id: id,
      title: title,
      image: image,
      readyInMinutes: readyInMinutes,
      servings: servings,
      extendedIngredients: extendedIngredients,
      analyzedInstructions: analyzedInstructions[0].steps,
      sourceUrl: sourceUrl,
      creditsText: creditsText
    })

}

export const trimRecByIng = data => {
  const trimmedRecByIng = data.map(recipe => {
    const { 
      id,
      title,
      image,
      missedIngredients,
      usedIngredients,
      unusedIngredients
    } = data

    const allIngredients = combineIngredients(missedIngredients, usedIngredients)

    return ({
      id,
      title,
      image,
      allIngredients,
      unusedIngredients
    })
  })

  return trimmedRecByIng
}

const combineIngredients = (missed, used) => {
  const allIngredients = []
  

  missed.forEach(ingredient => {
    let trimmed = {
      id: ingredient.id,
      name: ingredient.name,
      missed: true
    }
    allIngredients.push(trimmed)
  })

  used.forEach(ingredient => {
    let trimmed = {
      id: ingredient.id,
      name: ingredient.name,
      missed: false
    }
    allIngredients.push(trimmed)
  })

  return allIngredients
}