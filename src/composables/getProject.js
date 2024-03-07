import { ref } from 'vue'
import { supabase } from 'src/config/supabaseClient'

const getProject = () => {
  const data = ref(null)

  const dataLoaded = ref(false)
  const firstPic = ref()

  const load = async (name) => {
    const { data: project, error } = await supabase.from('projects').select('*').eq('name', name)

    if (project) {
      data.value = project
      dataLoaded.value = true

      firstPic.value = project[0].photos[0]
      console.log(firstPic.value)
    }
    if (error) {
      console.log(error)
      error.value = error
    }
  }

  return { data, load, dataLoaded, firstPic }
}

export default getProject
