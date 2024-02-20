import { ref } from 'vue'
import { supabase } from 'src/config/supabaseClient'

const getProject = () => {
  const documents = ref(null)
  const error = ref(null)
  const dataLoaded = ref(false)

  const load = async (categoryProject) => {
    try {
      const { data } = await supabase.from('projects').select().eq('category', categoryProject)

      if (!data) {
        throw Error('no data available')
      }
      documents.value = data
      dataLoaded.value = true
    } catch (err) {
      error.value = err.message
    }
  }

  return { error, documents, load, dataLoaded }
}

export default getProject
