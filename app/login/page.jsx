const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // 1. Sign in with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setErrorMsg(authError.message);
      setLoading(false);
      return;
    }

    // 2. Fetch user role from public.profiles table
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', authData.user.id)
      .single();

    if (profileError || !profileData) {
      setErrorMsg('User profile not found. Please contact admin.');
      setLoading(false);
      return;
    }

    // 3. Redirect based on user role
    const userRole = profileData.role;
    if (userRole === 'admin') {
      window.location.href = '/dashboard/admin';
    } else if (userRole === 'teacher') {
      window.location.href = '/dashboard/teacher';
    } else if (userRole === 'student') {
      window.location.href = '/dashboard/student';
    } else if (userRole === 'parent') {
      window.location.href = '/dashboard/parent';
    } else {
      window.location.href = '/dashboard/student';
    }
  };
