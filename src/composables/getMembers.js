import { supabase } from 'src/config/supabaseClient'
import { ref } from 'vue'

const getMembers = () => {
  const data = ref()
  const dataLoaded = ref(false)

  const loadMembers = async () => {
    const { data: members, error } = await supabase
      .from('members')
      .select('*')

    if (error) console.log(error)
    if (members) {
      data.value = members
    }
  }
  return { loadMembers, data, dataLoaded }
}
export default getMembers
